export default function ProcessData(data) {
  let DATA = [];
  data.latest && DATA.push(...data.latest.items);
  data.mostread && DATA.push(...data.mostread.items);
  data.discussed && DATA.push(...data.discussed.items);
  data.selected && DATA.push(...data.selected.items);

  return DATA;
}
