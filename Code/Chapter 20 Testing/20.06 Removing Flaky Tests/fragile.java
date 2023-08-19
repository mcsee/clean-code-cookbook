import static org.junit.Assert.assertEquals;

import org.junit.Test;

import components.set.Set;
import components.set.Set1L;

public abstract class SetTest {
 
    protected abstract Set<String> constructor();
   
    @Test
    public final void testAddEmpty() {
        Set<String> s = this.constructor();
        s.add("green");
        s.add("blue");
        assertEquals("{green. blue}", s.toString());
       // This is fragile since it depends on set sort (which is not defined)
    }   
}