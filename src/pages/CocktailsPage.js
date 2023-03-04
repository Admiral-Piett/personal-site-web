import { v4 as uuidv4 } from "uuid";

import { CgGlass, CgGlassAlt } from "react-icons/cg";
import { FaGlassMartiniAlt, FaGlassWhiskey } from "react-icons/fa";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";
import { useState } from "react";

// Martini (Up) - FaGlassMartiniAlt
// Nick & Nora (Kind of) - CgGlass
// Rocks Glass (rocks) - FaGlassWhiskey
// Highball (Tiki/Crushed Ice/Highball/etc.) - CgGlassAlt

const glassMapping = {
  martini: <FaGlassMartiniAlt className="cocktail-glassware" />,
  coupe: <CgGlass className="cocktail-glassware" />,
  rocks: <FaGlassWhiskey className="cocktail-glassware" />,
  highball: <CgGlassAlt className="cocktail-glassware" />,
};

const cocktails = [
  {
    name: "Holy Smokes",
    ingredients: [
      {
        name: "Gin",
        amount: "2",
        unit: "oz",
        notes: "Foundation (DH), cinnamon and juniper forward",
      },
      {
        name: "Lemon Juice",
        amount: "1/2",
        unit: "oz",
      },
      {
        name: "Elderflower Liqueur",
        amount: "3/4",
        unit: "oz",
        notes: "St. Germain",
      },
      {
        name: "Peated Scotch",
        amount: "rinse",
        notes: "Lagavulin 10 Year, smokey as hell",
      },
    ],
    steps: [
      "Rinse glass or use atomizer, dump out excess",
      "Combine all other ingredients and shake for 10-12 seconds",
      "Double strain and serve",
    ],
    glassware: "coupe",
    image: undefined,
    tastingNotes: ["Gin", "spices", "lemon", "smoke"],
  },
  {
    name: "Clothed and Mundane",
    ingredients: [
      {
        name: "Mezcal",
        amount: "2",
        unit: "oz",
        notes: "Del Maguey - Vida",
      },
      {
        name: "Sweet Vermouth/Wine Apéritif",
        amount: "1",
        unit: "oz",
        notes: "Byrrh",
      },
      {
        name: "Lime Juice",
        amount: "3/4",
        unit: "oz",
      },
      {
        name: "Campari",
        amount: "1/2",
        unit: "oz",
      },
      {
        name: "Elderflower Liqueur",
        amount: "1/2",
        unit: "oz",
        notes: "St. Germain",
      },
    ],
    steps: ["Combine all ingredients and shake for 10-12 seconds"],
    glassware: "coupe",
    image: undefined,
    tastingNotes: ["Mezcal", "bitter", "lime", "smoke"],
  },
];

const CocktailsPage = () => {
  const [openIndex, setOpenIndex] = useState(-1);

  const renderTastingNotes = (notes) => {
    return (
      <ul className="cocktail-tasting-notes-list">
        {notes.map((note) => {
          return (
            <li key={uuidv4()} className="cocktail-tasting-note">
              {note}
            </li>
          );
        })}
      </ul>
    );
  };

  const handleClick = (index) => {
    // If you click on the same cocktail that's already open, close it.
    if (openIndex === index) {
      setOpenIndex(-1);
      return;
    }
    setOpenIndex(index);
  };

  const renderedCocktails = cocktails.map((cocktail, index) => {
    const isSelected = openIndex === index;
    const carrot = isSelected ? (
      <GoChevronDown className="cocktail-expansion-carrot" />
    ) : (
      <GoChevronLeft className="cocktail-expansion-carrot" />
    );
    const image = cocktail.image ? (
      <img src={cocktail.image} alt="cocktail" />
    ) : undefined;

    const recipe = () => {
      if (!isSelected) {
        return;
      }
      return (
        <div key={uuidv4()} className="cocktail-recipe">
          {cocktail.ingredients.map((ingredient) => {
            return (
              <div key={uuidv4()} className="cocktail-ingredient">
                <div>{ingredient.amount}</div>
                <div>{ingredient.unit}</div>
                <p className="cocktail-ingredient-spacer">-</p>
                <div>{ingredient.name}</div>
                {ingredient.notes ? <div>({ingredient.notes})</div> : undefined}
              </div>
            );
          })}
          <ol className="cocktail-recipe-steps">
            {cocktail.steps.map((step) => {
              return <li key={uuidv4()}>{step}.</li>;
            })}
          </ol>
        </div>
      );
    };

    return (
      <div
        key={uuidv4()}
        className="cocktail-wrapper"
        onClick={() => {
          handleClick(index);
        }}
      >
        <div className="cocktail-header">
          <div className="cocktail-title">{cocktail.name}</div>
          {carrot}
        </div>
        <div className="cocktail-content">
          {renderTastingNotes(cocktail.tastingNotes)}
          {image}
          {recipe()}
          {glassMapping[cocktail.glassware]}
        </div>
      </div>
    );
  });

  return <div className="outer-wrapper">{renderedCocktails}</div>;
};

export default CocktailsPage;
