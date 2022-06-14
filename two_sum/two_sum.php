<?php
class Solution {
    /**
     * @param Integer[] $nums
     * @param Integer $target
     * @return Integer[]
     */
    function twoSum($nums, $target) {
    $seen = [];
    foreach($nums as $index => $value){
        $remaining = $target - $value;
        if(array_key_exists($remaining, $seen)){
            return array($index, $seen[$remaining]);
        }
        $seen[$value] = $index;
    }}
}
$sol = new Solution;
print_r($sol->twoSum([2,7,11,15], 9));
// echo 'Test';