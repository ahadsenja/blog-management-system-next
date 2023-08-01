import EditPost from './EditPost'

export default function Page(context: { params: { id: string }}) {
  return (
    <>
      <EditPost postId={context.params.id} />
    </>
  )
}
