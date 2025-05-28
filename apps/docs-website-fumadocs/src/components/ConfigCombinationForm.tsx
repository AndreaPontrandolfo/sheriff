'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
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
import type { SheriffConfigurablePlugins } from '@sherifforg/types';
import {
  sheriffStartingOptions,
  configCombinationDefaultValues,
} from '@sherifforg/constants';

interface FormItem {
  id: string;
  label: string;
}

const items: FormItem[] = Object.keys(configCombinationDefaultValues).map(
  (key) => ({
    id: key,
    label: key.charAt(0).toUpperCase() + key.slice(1),
  }),
);

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
    resolver: zodResolver(FormSchema),
    defaultValues: {
      items: items.map((item) => item.id),
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
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="items"
          render={() => (
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
                  {items.map((item) => (
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
                                checked={field.value?.includes(item.id)}
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? field.onChange([...field.value, item.id])
                                    : field.onChange(
                                        field.value?.filter(
                                          (value) => value !== item.id,
                                        ),
                                      );
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
                  ))}
                </div>
                <div>
                  <Button className="cursor-pointer" type="submit">
                    Submit
                  </Button>
                </div>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
