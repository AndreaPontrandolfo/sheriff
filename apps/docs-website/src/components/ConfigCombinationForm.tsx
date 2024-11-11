import type { JSX } from 'react';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import { configCombinationDefaultValues } from '@sherifforg/constants';
import styles from './ConfigCombinationForm.module.css';

interface ConfigCombinationFormProps {
  setTableData: (data: FormInputs) => void;
}

interface FormInputs {
  react: boolean;
  next: boolean;
  astro: boolean;
  lodash: boolean;
  remeda: boolean;
  playwright: boolean;
  vitest: boolean;
  jest: boolean;
}

export const ConfigCombinationForm = ({
  setTableData,
}: ConfigCombinationFormProps): JSX.Element => {
  const { register, handleSubmit, control, setValue } = useForm<FormInputs>({
    defaultValues: configCombinationDefaultValues,
  });

  const handleVitestChange = (isChecked: boolean) => {
    setValue('vitest', isChecked, { shouldDirty: true, shouldTouch: true });

    if (isChecked) {
      setValue('jest', false, { shouldDirty: true, shouldTouch: true });
    }
  };

  const handleJestChange = (isChecked: boolean) => {
    setValue('jest', isChecked, { shouldDirty: true, shouldTouch: true });

    if (isChecked) {
      setValue('vitest', false, { shouldDirty: true, shouldTouch: true });
    }
  };

  return (
    <form
      className={styles.checkboxGroupContainer}
      onSubmit={handleSubmit((data) => {
        setTableData(data);
      })}
    >
      <div className={styles.nativeCheckbox}>
        <input
          {...register('react')}
          defaultChecked
          type="checkbox"
          id="react"
        />
        <label htmlFor="react">React</label>
      </div>
      <div className={styles.nativeCheckbox}>
        <input {...register('next')} defaultChecked type="checkbox" id="next" />
        <label htmlFor="next">Next</label>
      </div>
      <div className={styles.nativeCheckbox}>
        <input
          {...register('astro')}
          defaultChecked
          type="checkbox"
          id="astro"
        />
        <label htmlFor="astro">Astro</label>
      </div>
      <div className={styles.nativeCheckbox}>
        <input
          {...register('lodash')}
          defaultChecked
          type="checkbox"
          id="lodash"
        />
        <label htmlFor="lodash">Lodash</label>
      </div>
      <div className={styles.nativeCheckbox}>
        <input
          {...register('remeda')}
          defaultChecked
          type="checkbox"
          id="remeda"
        />
        <label htmlFor="remeda">Remeda</label>
      </div>
      <div className={styles.nativeCheckbox}>
        <input
          {...register('playwright')}
          defaultChecked
          type="checkbox"
          id="playwright"
        />
        <label htmlFor="playwright">Playwright</label>
      </div>
      <div className={styles.nativeCheckbox}>
        <input
          {...register('vitest')}
          defaultChecked
          type="checkbox"
          id="vitest"
          onChange={(e) => {
            handleVitestChange(e.target.checked);
          }}
        />
        <label htmlFor="vitest">Vitest</label>
      </div>

      <div className={styles.nativeCheckbox}>
        <input
          {...register('jest')}
          type="checkbox"
          id="jest"
          onChange={(e) => {
            handleJestChange(e.target.checked);
          }}
        />
        <label htmlFor="jest">Jest</label>
      </div>

      <button
        type="submit"
        className="button button--sm button--outline button--primary"
      >
        SUBMIT
      </button>

      <DevTool control={control} />
    </form>
  );
};
