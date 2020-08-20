
const data = [{
  "id": 1, // 部门id
  "parentId": 0, // 父级部门id
  "department": "线下运营部",
  "deptLevel": 1, // 部门层级
  "childCount": null // 子级部门数量
}, 
{
  "id": 2,
  "parentId": 0,
  "department": "洗美业务部",
  "deptLevel": 1,
  "childCount": null
}, {
  "id": 3,
  "parentId": 0,
  "department": "研发部",
  "deptLevel": 1,
  "childCount": null
}, 
{
  "id": 4,
  "parentId": 0,
  "department": "拓展组织部",
  "deptLevel": 1,
  "childCount": null
}, {
  "id": 5,
  "parentId": 0,
  "department": "招商组织部",
  "deptLevel": 1,
  "childCount": null
}, 
{
  "id": 6,
  "parentId": 2,
  "department": "洗美业务部二级部门1",
  "deptLevel": 2,
  "childCount": null
}, {
  "id": 7,
  "parentId": 2,
  "department": "洗美业务部二级部门2",
  "deptLevel": 2,
  "childCount": null
}, 
{
  "id": 8,
  "parentId": 2,
  "department": "洗美业务部二级部门3",
  "deptLevel": 2,
  "childCount": null
}, {
  "id": 9,
  "parentId": 3,
  "department": "研发部二级部门1",
  "deptLevel": 2,
  "childCount": null
}, 
{
  "id": 10,
  "parentId": 3,
  "department": "研发部二级部门2",
  "deptLevel": 2,
  "childCount": null
}, {
  "id": 11,
  "parentId": 3,
  "department": "研发部二级部门3",
  "deptLevel": 2,
  "childCount": null
}, {
  "id": 12,
  "parentId": 3,
  "department": "研发部二级部门4",
  "deptLevel": 2,
  "childCount": null
}, {
  "id": 13,
  "parentId": 3,
  "department": "研发部二级部门5",
  "deptLevel": 2,
  "childCount": null
}, 
{
  "id": 15,
  "parentId": 13,
  "department": "研发部3级部门2",
  "deptLevel": 3,
  "childCount": null
}, {
  "id": 16,
  "parentId": 13,
  "department": "研发部3级部门3",
  "deptLevel": 3,
  "childCount": null
}, {
  "id": 17,
  "parentId": 13,
  "department": "研发部3级部门4",
  "deptLevel": 3,
  "childCount": null
}, {
  "id": 21,
  "parentId": 15,
  "department": "研发部4级部门4",
  "deptLevel": 4,
  "childCount": null
}, {
  "id": 22,
  "parentId": 15,
  "department": "研发部4级部门5",
  "deptLevel": 4,
  "childCount": null
}, {
  "id": 26,
  "parentId": 10,
  "department": "测试部门",
  "deptLevel": 3,
  "childCount": null
}, {
  "id": 27,
  "parentId": 10,
  "department": "测试部门1",
  "deptLevel": 3,
  "childCount": null
}]
 // 递归
function findPatentID(arr, parentId) {
  // 1.把每一项都遍
  let result = arr.filter(item => item.parentId === parentId) || [];
  result.forEach((item, index) => {
    item.children = findPatentID(arr, item.id)
  });
  return result;
}

let a = findPatentID(data, 0);
console.log(111, a);

// 利用对象是引用类型实现
function findPatentID2(arr, parentId) {
  arr.forEach(item1 => {
    item1.children = []
    arr.forEach(item2 => {
      if(item1.id === item2.parentId) {
        item1.children.push(item2)
      }
    })
  })
  const result = arr.filter(item => item.parentId === parentId) || [];
  return result;
}

let b = findPatentID2(data, 0);
console.log(222, b);
