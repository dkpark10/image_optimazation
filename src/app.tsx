import { useSelector } from 'react-redux';
import RadioButton from './components/atoms/radio_button';
import LazyLoadPage from './components/page/lazyload_page';
import Page from './components/page/page_default';
import { RootState } from './reducer/index';

export default function App() {

  const options = useSelector((state: RootState) => state.options);

  return (
    <>
      {options.lazyLoading
        ? <LazyLoadPage itemCount={options.itemCount} />
        : <Page itemCount={options.itemCount} />}
    </>
  )
}