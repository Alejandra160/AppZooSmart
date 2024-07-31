// components/View.tsx

import React, { ReactNode } from 'react';
import { Text, View as RNView, ViewProps } from 'react-native';

interface CustomViewProps extends ViewProps {
  children: ReactNode;
}

// Componente View personalizado
const View: React.FC<CustomViewProps> = ({ children, ...props }) => {
  // Función para envolver nodos de texto en un componente <Text>
  const wrapTextNodes = (children: ReactNode): ReactNode => {
    return React.Children.map(children, child => {
      if (typeof child === 'string') {
        return <Text>{child}</Text>;
      } else if (React.isValidElement(child) && child.props.children) {
        return React.cloneElement(child, {
          children: wrapTextNodes(child.props.children)
        });
      }
      return child;
    });
  };

  const wrappedChildren = wrapTextNodes(children);

  return <RNView {...props}>{wrappedChildren}</RNView>;
};

export default View;
