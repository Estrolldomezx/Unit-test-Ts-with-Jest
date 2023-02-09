export function merge(collection1: number[], collection2: number[]): number[] {
    const mergedCollection : number[] = [];
    let index1 = 0;
    let index2 = 0;
    if (collection1 && collection2) {
        while (index1 < collection1.length && index2 < collection2.length) {
            if (collection1[index1] < collection2[index2]) {
                mergedCollection.push(collection1[index1]);
                index1++;
            } else {
                mergedCollection.push(collection2[index2]);
                index2++;
            }
        }
        while (index1 < collection1.length) {
            mergedCollection.push(collection1[index1]);
            index1++;
        }
        while (index2 < collection2.length) {
            mergedCollection.push(collection2[index2]);
            index2++;
        }
    }
    return mergedCollection;
}