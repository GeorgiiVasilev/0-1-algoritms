function longestOnes(nums, k) {
    let countUsedK = 0;
    let maxLength = 0;
    let tempMaxLength = 0;

    let left = 0;
    let right = 0;

    while (right < nums.length) {
        const currentRightNum = nums[right];

        if (currentRightNum === 0) {
            if (countUsedK < k) {
                countUsedK++;
                tempMaxLength++;
                right++;
            } else {
                const currentLeftNum = nums[left];

                if (currentLeftNum === 0) {
                    countUsedK--;
                }

                left++;
                tempMaxLength--;
            }
        } else {
            tempMaxLength++;
            right++;
        }

        if (tempMaxLength > maxLength) {
            maxLength = tempMaxLength
        }
    }

    return maxLength;
}

const data1 = {list: [0, 0, 0, 0, 0], k: 0} // 0
const data2 = {list: [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], k: 2} // 6
const data3 = {list: [0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], k: 3} // 10

console.log(`result 1`, longestOnes(data1.list, data1.k));
console.log(`result 2`, longestOnes(data2.list, data2.k));
console.log(`result 3`, longestOnes(data3.list, data3.k));
