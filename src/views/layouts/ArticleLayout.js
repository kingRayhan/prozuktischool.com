import React from 'react';
import { Box } from '../components';

const ArticleLayout = ({ children, ...props }) => (
  <Box maxWidth={960} margin="0 auto" padding={4} {...props}>
    {children}
  </Box>
);

export default ArticleLayout;
