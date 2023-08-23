int i = 0;

start:
if (i < 10)
{
    Console.WriteLine(i);
    i++;
    goto start;
}