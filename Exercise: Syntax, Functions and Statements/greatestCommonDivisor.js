function greatestCommonDivisor(num1, num2)
{
    while(num2)
    {
        let temp = num2;
        let remainder = num1 % num2;
        num2 = remainder;
        num1 = temp;
    }

    console.log(num1);
}
