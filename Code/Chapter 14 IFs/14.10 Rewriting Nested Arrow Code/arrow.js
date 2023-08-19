if (actualIndex < totalItems)
    {
      if (product[actualIndex].Name.Contains("arrow"))
      {
        do
        {
          if (product[actualIndex].price == null)
          {
            // handle no price
          }
          else
          {
            if (!(product[actualIndex].priceIsCurrent()))
            {
              // add price
            }
            else
            {
              if (!hasDiscount)
              {
                // handle discount
              }
              else
              {
                // etc
              }
            }
          }
          actualIndex++;
        }
        while (actualIndex < totalCount && totalPrice < wallet.money);
      }
      else
        actualIndex++;
    }
    return actualIndex;
  }  