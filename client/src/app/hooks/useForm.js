import { useState } from 'react'

export const useForm = (initForm = {}) => {
  const [ form, setForm ] = useState( initForm )
  const [ isLoading, setFormLoading ] = useState(false)
  
  const onChangeForm = ({ target }) => {
    const { name, value } = target
    setForm({ ...form, [name]: value })
  }

  const onValidateForm = () => {
    const fields = Object.values(form)

    return fields.some(value => !value)
  }

  const onSubmitForm = async (apiCallback) => {
    if ( onValidateForm() || isLoading ) return
    
    await setFormLoading(true)
    const apiResult = await apiCallback(form)
    await setFormLoading(false)
    
    return apiResult
  }
  
  return {
    form,
    isLoading,
    onChangeForm,
    onSubmitForm,
  }
}