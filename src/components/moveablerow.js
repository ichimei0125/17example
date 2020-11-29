import React, { useEffect } from "react";

function MoveableRow({ children }) {
    useEffect(function () {
        React.Children.forEach(children, (child) => {
            const domNode = child.ref.current;
            const change = child.props.m;

            if (change) {
                requestAnimationFrame(function () {
                    domNode.style.transform = `translateY(${change}px)`;
                    domNode.style.transition = "transform 0s";

                    requestAnimationFrame(function () {
                        domNode.style.transform = "";
                        domNode.style.transition = "transform 500ms";
                    });
                });
            }
        });
    }, [children]);

    return children;
};

export default MoveableRow;