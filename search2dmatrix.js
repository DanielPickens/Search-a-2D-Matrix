//An efficient option is to find the row using binary search to where its first element > target
//Consider the matrix as an array and keep the start and end pointers at the first element and last element respectively.
//We will check ith row's first value against target
//if it is equal return true, if it's more than target we know that 
//element is in the previous row, so then we need to perform a binary search on that row 



//Recursive solution

//Time Complexity: O(logn)
//Space Complexity: O(1)

var searchMatrix = (matrix, target) => {
     if (matrix == null || matrix.length == 0)
            return false;      

        if (target < matrix[0][0])
            return false;
        let n = matrix[0].length;

        for (var i = 0; i < matrix.length; i++) {

            //finding candidate row
            if (matrix[i][0] <= target && target <= matrix[i][n - 1]) {

                return binarySearch(matrix[i], target);

            }
        }


        return false;
    }
// Binary search                             
    let binarySearch = ( matrix, target) => {
        let l = 0, r = matrix.length;

        while (l <= r) {

            let mid = (l + r) >> 1;
            if (matrix[mid] == target)
                return true;

            if (matrix[mid] > target)
                r = mid - 1;
            else
                l = mid + 1;
        }
        return false;
    };
    
    
  /*
  Success
Details 
Runtime: 76 ms, faster than 70.27% of JavaScript online submissions for Search a 2D Matrix.
Memory Usage: 40.1 MB, less than 15.01% of JavaScript online submissions for Search a 2D Matrix.
*/
  
