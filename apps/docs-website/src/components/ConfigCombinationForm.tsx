/* eslint-disable @typescript-eslint/no-misused-promises */
'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  configCombinationDefaultValues,
  sheriffStartingOptions,
} from '@sherifforg/constants';
import type { SheriffConfigurablePlugins } from '@sherifforg/types';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

// Prepare initial selected items based on configCombinationDefaultValues
// and ensure vitest/jest exclusivity from the start.
const allTechKeys = Object.keys(
  configCombinationDefaultValues,
) as (keyof SheriffConfigurablePlugins)[];

let initialSelectedItems = allTechKeys.filter(
  (key) => configCombinationDefaultValues[key],
);

// If both vitest and jest are somehow initially true, default to vitest.
if (
  initialSelectedItems.includes('vitest') &&
  initialSelectedItems.includes('jest')
) {
  initialSelectedItems = initialSelectedItems.filter((id) => id !== 'jest');
}

interface TechnologyFormItem {
  id: keyof SheriffConfigurablePlugins;
  label: string;
}

const items: TechnologyFormItem[] = Object.keys(
  configCombinationDefaultValues,
).map((key) => {
  return {
    id: key as keyof SheriffConfigurablePlugins,
    label: key.charAt(0).toUpperCase() + key.slice(1),
  };
});

const FormSchema = z.object({
  items: z.array(z.string()),
});

interface ConfigCombinationFormProps {
  setTableData: (data: SheriffConfigurablePlugins) => void;
}

export function ConfigCombinationForm({
  setTableData,
}: ConfigCombinationFormProps) {
  const form = useForm<z.infer<typeof FormSchema>>({
    // @ts-expect-error
    resolver: zodResolver(FormSchema),
    defaultValues: {
      items: initialSelectedItems,
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    const transformedData: SheriffConfigurablePlugins = {
      ...sheriffStartingOptions,
    };

    for (const item of data.items) {
      if (item in transformedData) {
        transformedData[item as keyof SheriffConfigurablePlugins] = true;
      }
    }

    setTableData(transformedData);
  }

  return (
    <Form {...form}>
      <form className="space-y-8" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="items"
          render={() => {
            return (
              <FormItem>
                <div className="mb-4">
                  <FormLabel className="text-base">Technologies</FormLabel>
                  <FormDescription className="mb-0">
                    Select the technologies that should compose your ESLint
                    configuration.
                  </FormDescription>
                </div>
                <div className="mb-6 max-w-lg rounded-md border p-2 shadow">
                  <div className="mb-8 flex flex-wrap gap-6">
                    {items.map((item) => {
                      return (
                        <FormField
                          key={item.id}
                          control={form.control}
                          name="items"
                          render={({ field }) => {
                            return (
                              <FormItem
                                key={item.id}
                                className="flex cursor-pointer flex-row items-center"
                              >
                                <FormControl className="cursor-pointer">
                                  <Checkbox
                                    checked={field.value.includes(item.id)}
                                    onCheckedChange={(checked) => {
                                      const currentSelections =
                                        field.value || [];
                                      let newSelections: string[];

                                      if (checked) {
                                        // Add the current item
                                        newSelections = [
                                          ...currentSelections,
                                          item.id,
                                        ];

                                        // Handle mutual exclusivity for vitest and jest
                                        if (item.id === 'vitest') {
                                          newSelections = newSelections.filter(
                                            (id) => id !== 'jest',
                                          );
                                        } else if (item.id === 'jest') {
                                          newSelections = newSelections.filter(
                                            (id) => id !== 'vitest',
                                          );
                                        }
                                      } else {
                                        // Remove the current item
                                        newSelections =
                                          currentSelections.filter(
                                            (value) => value !== item.id,
                                          );
                                      }
                                      field.onChange(newSelections);
                                    }}
                                  />
                                </FormControl>
                                <FormLabel className="cursor-pointer text-sm font-normal">
                                  {item.label}
                                </FormLabel>
                              </FormItem>
                            );
                          }}
                        />
                      );
                    })}
                  </div>
                  <div>
                    <Button className="cursor-pointer" type="submit">
                      Submit
                    </Button>
                  </div>
                </div>
                <FormMessage />
              </FormItem>
            );
          }}
        />
      </form>
    </Form>
  );
}
