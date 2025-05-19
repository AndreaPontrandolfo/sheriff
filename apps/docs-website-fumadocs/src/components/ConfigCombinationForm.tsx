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
import { Input } from '@/components/ui/input';

const items = [
  {
    id: 'react',
    label: 'React',
  },
  {
    id: 'next',
    label: 'Next',
  },
  {
    id: 'astro',
    label: 'Astro',
  },
  {
    id: 'lodash',
    label: 'Lodash',
  },
  {
    id: 'remeda',
    label: 'Remeda',
  },
  {
    id: 'playwright',
    label: 'Playwright',
  },
  {
    id: 'storybook',
    label: 'Storybook',
  },
  {
    id: 'vitest',
    label: 'Vitest',
  },
  {
    id: 'jest',
    label: 'Jest',
  },
] as const;

const FormSchema = z.object({
  items: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: 'You have to select at least one item.',
  }),
});

interface FormInputs {
  react: boolean;
  next: boolean;
  astro: boolean;
  lodash: boolean;
  remeda: boolean;
  playwright: boolean;
  storybook: boolean;
  vitest: boolean;
  jest: boolean;
}

interface ConfigCombinationFormProps {
  setTableData: (data: FormInputs) => void;
}

export function ConfigCombinationForm({
  setTableData,
}: ConfigCombinationFormProps) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      items: [
        'react',
        'next',
        'astro',
        'lodash',
        'remeda',
        'playwright',
        'storybook',
        'vitest',
      ],
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    setTableData(data);
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
              <div className="mb-4 flex flex-wrap justify-evenly gap-3 rounded-md border py-2 shadow">
                {items.map((item) => (
                  <FormField
                    key={item.id}
                    control={form.control}
                    name="items"
                    render={({ field }) => {
                      return (
                        <FormItem
                          key={item.id}
                          className="flex cursor-pointer flex-row items-center gap-0 space-x-2"
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
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="cursor-pointer" type="submit">
          Submit
        </Button>
      </form>
    </Form>
  );
}
