'use client'

import { FieldErrors, Path, useForm } from 'react-hook-form'
import { vendorFormDefaultValues, vendorFormFields } from '../../defaultValues/vendorForm'
import { FieldIF, VendorFormIF } from '../../types/vendorform'
import Header from '@/app/Components/Header/Header'

const inputClassName =
  'w-full rounded border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 outline-none focus:border-zinc-500'

const VendorForm = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<VendorFormIF>({
        defaultValues: vendorFormDefaultValues,
    })

    const onSubmit = (data: VendorFormIF) => {
        console.log(data)
    }

    const renderField = (key: string, field: FieldIF) => {
        const fieldPath = `${key}.${field.name}` as Path<VendorFormIF>

        if (field.type === 'select') {
            return (
                <select id={fieldPath} className={inputClassName} {...register(fieldPath)} required={field.required}>
                    <option value="">{field.placeholder ?? 'Select'}</option>
                    {field.options?.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            )
        }

        if (field.type === 'checkbox') {
            return (
                <input
                    type="checkbox"
                    id={fieldPath}
                    className="h-4 w-4 accent-zinc-900"
                    {...register(fieldPath)} 
                    required={field.required}
                />
            )
        }

        if (field.type === 'file') {
            return (
                <input
                    type="file"
                    id={fieldPath}
                    className="w-full text-sm text-zinc-700 file:mr-3 file:rounded file:border-0 file:bg-zinc-100 file:px-3 file:py-2 file:text-sm file:font-medium"
                    {...register(fieldPath)}
                    required={field.required}
                />
            )
        }

        return (
            <>
            <input
                type={field.type}
                id={fieldPath}
                placeholder={field.placeholder}
                className={inputClassName}
                {...register(fieldPath)}
                required={field.required}
            />
            </>
        )
    }

  return (
    <div>
        <Header title="Create Vendor" description="Add a new vendor to the system." />
        <div className="mt-3">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">
                {Object.entries(vendorFormFields).map(([key, value]: [string, { label: string; fields: FieldIF[] }]) => (
                    <div key={key} className="flex flex-col gap-4">
                        <h5 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">{value.label}</h5>
                        <div className='grid grid-cols-2 gap-4'>
                        {value.fields.map((field: FieldIF) => {
                            const fieldPath = `${key}.${field.name}` as Path<VendorFormIF>
                            const isCheckbox = field.type === 'checkbox'
                            return (
                            <div
                                className={isCheckbox ? 'flex items-center gap-2' : 'flex flex-col gap-2'}
                                key={field.name}
                            >
                                {isCheckbox ? (
                                    <>
                                        {renderField(key, field)}
                                        <label htmlFor={fieldPath} className="text-sm text-zinc-800">{field.label}</label>
                                    </>
                                ) : (
                                    <>
                                        <label htmlFor={fieldPath} className="text-sm font-medium text-zinc-800">{field.label}</label>
                                        {renderField(key, field)}
                                    </>
                                )}
                                {errors[fieldPath as keyof FieldErrors<VendorFormIF>] && (
                                    <p className="text-sm text-red-600">
                                        {errors[fieldPath as keyof FieldErrors<VendorFormIF>]?.message as string}
                                    </p>
                                )}
                            </div>
                            )
                        })}
                        </div>
                    </div>
                ))}
                <div className='flex justify-end gap-3'>
                <button className="bg-white text-zinc-900 px-4 py-2 rounded-md border border-zinc-300" onClick={() => reset()}>Reset</button>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md border border-blue-500">Create Vendor</button>
                </div>
             </form>
        </div>
    </div>
  )
}

export default VendorForm
