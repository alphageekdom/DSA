const mergeTwoSortedLists = (list1, list2) => {

    let newList = list1.concat(list2).sort();
    console.log(newList)
    return newList
}



console.log(mergeTwoSortedLists(list1 = [1, 2, 4], list2 = [1, 3, 4]))
console.log(mergeTwoSortedLists(list1 = [], list2 = []))
console.log(mergeTwoSortedLists(list1 = [], list2 = [0]))