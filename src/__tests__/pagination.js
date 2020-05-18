import React from 'react';
import renderer from 'react-test-renderer';
import Pagination from '../pagination';

test('render', () => {
  const component = renderer.create(<Pagination />);
  expect(component.toJSON()).toMatchInlineSnapshot(`
    <nav
      className="css-9y6172"
    >
      <ul
        className="css-slavhk"
      >
        <li>
          <span
            className="css-4ui5hk"
          >
            ‹
          </span>
        </li>
        <li>
          <a
            className="css-fkqg9t"
            onClick={[Function]}
          >
            1
          </a>
        </li>
        <li>
          <span
            className="css-nzulte"
          >
            …
          </span>
        </li>
        <li>
          <span
            className="css-nzulte"
          >
            …
          </span>
        </li>
        <li>
          <span
            className="css-fht8wo"
          >
            ›
          </span>
        </li>
      </ul>
    </nav>
  `);
});
