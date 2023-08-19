// If you made Square derive from Rectangle, 
// then a Square should be usable anywhere you expect a rectangle

#include <iostream>

Rectangle::Rectangle(const unsigned width, const unsigned height):
    m_width(width),
    m_height(height)
{
}

void Rectangle:changeWidth(const unsigned width)
{
  /* Width and Height are independant */
    m_width = width;
    // We should discuss if it is good to mutate 
    // and not create a new Figure
}

void Rectangle::changeHeight(const unsigned height)
{
    m_height = height;
}

unsigned Rectangle::area() const
{ 
    return m_height * m_width;
}

// No inheritance
Square::Square(const unsigned size):
    m_size(size)
{
}

unsigned Square::area() const
{ 
    return m_size * m_size;
}
 
void Square::changeSize(const unsigned size)
{
    m_size = size; 
}
 
void testRectangleChange(Rectangle& r)
{
    unsigned h = 10;
    auto w = r.getWidth();
    r.setHeight(h);

    std::cout << "Expected area: " << (w*h) << ", got " << r.area() << "\n";
    // area is not well defined in squares
    // every square IS-A rectangle, but does not behave-like a rectangle
}

int main()
{
    Rectangle rectangle{3,4};
    Square square{5};
    testRectangleChange(rectangle);
    testRectangleChange(square);
}