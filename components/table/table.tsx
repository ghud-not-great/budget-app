import styles from "./table.module.css";

const Table: React.FC<TableProps> = ({ config }) => {
  return (
    <div className={styles.container}>
      <table>
        <caption>{config.caption}</caption>
        <thead>
          <tr>
            {config.columns.map((column) => {
              return <th key={column.id}>{column.label}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {config.data.map((datum) => {
            return (
              <tr key={datum.id}>
                {config.columns.map((column) => {
                  return <td key={column.id}>{datum[column.name]}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

Table.defaultProps = {
  config: {
    caption: "Caption",
    columns: [
      {
        id: 1,
        label: "Some Column",
        name: "someColumn",
      },
      {
        id: 2,
        label: "Delta",
        name: "delta",
      },
    ],
    data: [
      {
        delta: 1,
        id: 1,
        someColumn: "hello",
      },
      {
        delta: 1,
        id: 2,
        someColumn: "world",
      },
      {
        delta: 1,
        id: 3,
        someColumn: "bob",
      },
      {
        delta: 1,
        id: 4,
        someColumn: "alice",
      },
    ],
  },
};

export interface TableProps {
  config: TableConfig;
}

interface TableConfig {
  caption: string;
  columns: {
    id: number;
    name: string;
    label: string;
  }[];
  data: TableData[];
}

interface TableData {
  [column: string]: string | number;
}

export default Table;
