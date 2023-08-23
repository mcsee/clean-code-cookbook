public class Door
{
 
    private Boolean isOpened;
    
    public Door(boolean isOpened)
    {       
        this.isOpened = isOpened;
    }      
    
    public void openDoor()
    {
        this.isOpened = true;
    }
    
    public void closeDoor()
    {
        this.isOpened = false;
    }      
    
}