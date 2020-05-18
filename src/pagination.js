/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { Fragment } from 'react';
import { range, makeStyles } from './utils';

export const PageItems = ({ start, end, current, onChange, styles }) => {
  return range(start, end + 1).map(i => (
    <li key={i}>
      {current === i ? (
        <span css={[styles.item, styles.itemActive]}>{i}</span>
      ) : (
        <a css={styles.item} onClick={() => onChange(i)}>
          {i}
        </a>
      )}
    </li>
  ));
};

export const Gap = ({ styles }) => {
  return (
    <li>
      <span css={[styles.item, styles.itemDisabled]}>…</span>
    </li>
  );
};

const Pagination = ({
  total,
  current,
  onChange,
  maxItems,
  styles: customStyles
}) => {
  const styles = makeStyles(customStyles);
  const hasPrev = current > 1;
  const hasNext = current < total;
  // todo: custom text
  const prev = '‹';
  const next = '›';
  const left = parseInt((maxItems - 3) / 2, 10);
  const right = maxItems - 3 - left;

  function renderPageItems() {
    if (total < maxItems) {
      return (
        <PageItems
          start={1}
          end={total}
          current={current}
          onChange={onChange}
          styles={styles}
        />
      );
    }

    if (current > total - maxItems + 2) {
      return (
        <Fragment>
          <PageItems
            start={1}
            end={1}
            current={current}
            onChange={onChange}
            styles={styles}
          />
          <Gap styles={styles} />
          <PageItems
            start={total - maxItems + 2}
            end={total}
            current={current}
            onChange={onChange}
            styles={styles}
          />
        </Fragment>
      );
    }

    if (current < maxItems - 1) {
      return (
        <Fragment>
          <PageItems
            start={1}
            end={maxItems - 1}
            current={current}
            onChange={onChange}
            styles={styles}
          />
          <Gap styles={styles} />
          <PageItems
            start={total}
            end={total}
            current={current}
            onChange={onChange}
            styles={styles}
          />
        </Fragment>
      );
    }

    return (
      <Fragment>
        <PageItems
          start={1}
          end={1}
          current={current}
          onChange={onChange}
          styles={styles}
        />
        <Gap styles={styles} />
        <PageItems
          start={current - left}
          end={current + right}
          current={current}
          onChange={onChange}
          styles={styles}
        />
        <Gap styles={styles} />
        <PageItems
          start={total}
          end={total}
          current={current}
          onChange={onChange}
          styles={styles}
        />
      </Fragment>
    );
  }

  if (total <= 0) return null;

  return (
    <nav
      css={css`
        user-select: none;
      `}
    >
      <ul
        css={css`
          display: flex;
          padding-left: 0;
          list-style: none;
          border-radius: 4px;
          margin-top: 8px;
          margin-bottom: 8px;
        `}
      >
        <li>
          {hasPrev ? (
            <a
              css={[styles.item, styles.itemFirst]}
              onClick={() => onChange(current - 1)}
            >
              {prev}
            </a>
          ) : (
            <span css={[styles.item, styles.itemFirst, styles.itemDisabled]}>
              {prev}
            </span>
          )}
        </li>

        {renderPageItems()}

        <li>
          {hasNext ? (
            <a
              css={[styles.item, styles.itemLast]}
              onClick={() => onChange(current + 1)}
            >
              {next}
            </a>
          ) : (
            <span css={[styles.item, styles.itemLast, styles.itemDisabled]}>
              {next}
            </span>
          )}
        </li>
      </ul>
    </nav>
  );
};

Pagination.defaultProps = {
  maxItems: 5,
  styles: {}
};

export default Pagination;
