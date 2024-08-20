import { useParams } from 'react-router-dom'
import { BasicLayout } from '@app/layouts/Basic.layout'

export const UserPage = () => {
  const { id } = useParams()

  return (
    <BasicLayout>
      <h1>UserPage - { id }</h1>
    </BasicLayout>
  )
}
