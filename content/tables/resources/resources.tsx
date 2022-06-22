import Table, {TableProps} from '../../../components/table/table'

const Resources = () => {
  return (
    <Table
      caption={resources.caption}
      column={resources.column}
      data={resources.data}
    />
  )
}

const resources: TableProps = {
  caption: 'It\'s all just things',
  column: 'Resources',
  data: [
    {
      id: 1,
      delta: 33,
      name: 'Phone',
    }
  ]
}

export default Resources
