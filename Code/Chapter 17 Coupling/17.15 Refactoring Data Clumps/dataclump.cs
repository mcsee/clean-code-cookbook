public class DinnerTable
{
    public DinnerTable(Person guest, DateTime from, DateTime to)
    {
        Guest = guest; 
        From = from;
        To = to;
    }
    private Person Guest;
    private DateTime From; 
    private DateTime To;
}