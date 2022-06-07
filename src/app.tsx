import { ThemeProvider } from 'styled-components';
import LazyLoadPage from './components/page/lazyload_page';
import Page from './components/page/page_default';
import { theme } from './styles/theme';
import { OptionStatus, setOptimizeOptions } from './reducer/options';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

export default function App() {
  const dispatch = useDispatch();
  const initOptions: OptionStatus = JSON.parse(localStorage.getItem('options'));
  const options: OptionStatus = {
    sprite: false,
    lazyLoading: true,
    webFormat: false,
    itemCount: 27,
    imgSize: '100'
  }

  useEffect(() => {
    if (!initOptions) {
      localStorage.setItem('options', JSON.stringify(options));
    }

    dispatch(setOptimizeOptions(initOptions || options));
  }, []);

  return (
    <ThemeProvider theme={theme}>
      {options.lazyLoading
        ? <LazyLoadPage itemCount={options.itemCount} />
        : <Page itemCount={options.itemCount} />}
    </ThemeProvider>
  )
}