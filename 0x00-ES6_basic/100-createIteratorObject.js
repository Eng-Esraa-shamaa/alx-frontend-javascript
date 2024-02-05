export default function createIteratorObject(report) {
  let allEmployees = [];
  for (const emp of Object.values(report.allEmployees)) {
    allEmployees = [
      ...allEmployees,
      ...emp,
    ];
  }
  return allEmployees;
}
