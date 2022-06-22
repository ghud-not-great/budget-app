import Table, {TableProps} from '../../../components/table/table'

const Relationships = () => {
  return (
    <Table
      caption={relationships.caption}
      column={relationships.column}
      data={relationships.data}
    />

  )
}

const relationships: TableProps = {
  caption: 'Interactivity',
  column: 'Relationships',
  data: [
    {
      id: 1,
      delta: 40,
      name: 'Philippines',
    }
  ],
}

export default Relationships
