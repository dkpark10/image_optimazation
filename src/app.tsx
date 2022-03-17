import { useSelector, shallowEqual } from 'react-redux';
import LazyLoadPage from './components/page/lazyload_page';
import Page from './components/page/page_default';
import { RootState } from './reducer/index';
import styled from 'styled-components';

export default function App() {

  const options = useSelector((state: RootState) => state.options, shallowEqual);

  return (
    <>
      {options.lazyLoading
        ? <LazyLoadPage />
        : <Page itemCount={options.itemCount} />}
    </>
  )
}