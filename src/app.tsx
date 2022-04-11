import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import LazyLoadPage from './components/page/lazyload_page';
import Page from './components/page/page_default';
import { RootState } from './reducer/index';
import { theme } from './styles/theme';

export default function App() {

  const options = useSelector((state: RootState) => state.options);

  return (
    <>
      <ThemeProvider theme={theme}>
        {options.lazyLoading
          ? <LazyLoadPage itemCount={options.itemCount} />
          : <Page itemCount={options.itemCount} />}
      </ThemeProvider>
    </>
  )
}
