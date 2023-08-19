// If you made Square derive from Rectangle, 
// then a Square should be usable anywhere you expect a rectangle

#include <iostream>

Rectangle::Rectangle(const unsigned width, const unsigned height):
    m_width(width),
    m_height(height)
{
}

unsigned Rectangle::getWidth() const
{
    return m_width;
}

void Rectangle::setWidth(const unsigned width)
{
  /* Width and Height are independent */
    m_width = width;
}

unsigned Rectangle::getHeight() const
{
    return m_height;
}

void Rectangle::setHeight(const unsigned height)
{
    m_height = height;
}

unsigned Rectangle::area() const
{
  /*Valid for both Rectangles and Squares*/
    return m_height * m_width;
}

Square::Square(const unsigned size)
    : Rectangle(size, size)
{
}

// OK for squares, bad for rectangles
// Protocol is bad, width and height are not relevant on squares
void Square::setWidth(const unsigned size)
{
    m_height = size;
    m_width = size;
}

// OK for squares, bad for rectangles
// Protocol is bad, width and height are not relevant on squares
void Square::setHeight(const unsigned size)
{
    m_height = size;
    m_width = size;
}

void process(Rectangle& r)
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
    process(rectangle);
    process(square);
}