import EditPost from './EditPost'

export default function Page(context: { params: { id: string }}) {
  return (
    <>
      <EditPost params={context.params.id} />
    </>
  )
}
