import Table, {TableProps} from '../../../components/table/table'

const Education = () => {
  return (
    <Table
      caption={education.caption}
      data={education.data}
      column={education.caption}
    />
  )
}

const education: TableProps = {
  caption: 'Learning is earning',
  column: 'Education',
  data: [
    {
      id: 1,
      delta: 1400,
      name: 'Coding',
    },
  ],
}

export default Education
