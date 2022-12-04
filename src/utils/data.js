let columns = [
  { id: 1, title: "New Task", status: "new" },
  { id: 2, title: "Scheduled", status: "sch" },
  { id: 3, title: "In Progress", status: "inpr" },
  { id: 4, title: "Completed", status: "compl" },
];

let tasks = [
  {
    id: 11,
    label: "Check Email",
    status: "new",
    timeToComplete: "0:20h",
    color: "#FED049",
  },
  {
    id: 12,
    label: "Check Another Email",
    status: "new",
    timeToComplete: "0:20h",
    color: "#FFADBC",
  },
  {
    id: 13,
    label: "Drink Coffee",
    status: "sch",
    timeToComplete: "0:20h",
    color: "#8D9EFF",
  },
  {
    id: 14,
    label: "Drink Tea",
    status: "inpr",
    timeToComplete: "0:20h",
    color: "#FFADBC",
  },
  {
    id: 15,
    label: "Buy Milk",
    status: "inpr",
    timeToComplete: "0:20h",
    color: "#FED049",
  },
  {
    id: 16,
    label: "Sell Milk",
    status: "compl",
    timeToComplete: "0:20h",
    color: "#8D9EFF",
  },
];

const kanbanBtnOptions = [
  { id: 1, title: "Board View" },
  { id: 2, title: "Table View" },
  { id: 3, title: "Kanban View" },
];

export { columns, tasks, kanbanBtnOptions };
