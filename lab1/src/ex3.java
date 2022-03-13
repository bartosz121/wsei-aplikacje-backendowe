// Przepisz program na Java https://dirask.com/posts/JavaScript-binary-search-algorithm-example-gp5lgD

public class ex3 {
    public static void main(String[] args){
        int[] arr = new int[]{4, 5, 7, 11, 12, 15, 15, 21, 40, 45};
        int arrIndex = binarySearch(arr, 11);

        if(arrIndex != -1){
            System.out.println("Index found: " + arrIndex);
        } else {
            System.out.println("Not found");
        }
    }

    public static int binarySearch(int[] arr, int value){
        int index = 0;
        int arrLengthLimit = arr.length;
        while(index <= arrLengthLimit){
            int currentIndex = (int) Math.ceil((index + arrLengthLimit) / 2);
            int currentValue = arr[currentIndex];

            if (value > currentValue) {
                index = currentIndex + 1;
            } else if (value < currentValue){
                arrLengthLimit = currentIndex - 1;
            } else {
                // is equal
                return currentIndex;
            }
        }
        // not found
        return -1;
    }
}
