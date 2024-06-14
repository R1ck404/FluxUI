import React, { CSSProperties, ReactNode } from 'react';
import classNames from 'classnames';
import Button from '../button/button';
import Input from '../input/input';
import { Avatar } from '../avatar/avatar';

interface SkeletonProps {
    width?: string | number;
    height?: string | number;
    children?: ReactNode;
    className?: string;
    loading?: boolean;
}

const Skeleton: React.FC<SkeletonProps> = ({ width, height, children, className, loading }) => {
    const renderSkeletonElement = (node: ReactNode, key: number): ReactNode => {
        if (React.isValidElement(node)) {
            const { type, props } = node;
            const style: CSSProperties = { display: 'inline-block' };

            if (type === 'img') {
                return <div key={key} className="animate-pulse" style={{ ...style, width: props.width, height: props.height }} />;
            } else if (typeof type === 'string' && ['h1', 'h2', 'h3', 'p', 'span'].includes(type)) {
                const height = { h1: '2', h2: '1.75', h3: '1.50', p: '1.25', span: '1' }[type] as unknown as number ?? '2.5';
                const xPadding = { h1: '6', h2: '5', h3: '4', p: '3', span: '2' }[type] as unknown as number ?? '7';
                const contentWidth = props.children.toString().length * 8 + (xPadding / 1.3);
                return <div key={key} className="bg-zinc-300 dark:bg-zinc-600 animate-pulse flex rounded" style={{ ...style, width: contentWidth, height: `${height}rem` }} />;
            } else if (type === 'button' || type === Button) {
                const contentWidth = props.children.toString().length * 8 + 20;
                return <div key={key} className="bg-zinc-300 dark:bg-zinc-600 animate-pulse flex rounded" style={{ ...style, width: contentWidth, height: '2.25rem' }} />;
            } else if (type === 'input' || type === 'textarea' || type === Input) {
                return <div key={key} className="bg-zinc-300 dark:bg-zinc-600 animate-pulse flex rounded" style={{ ...style, width: '100%', height: '2.25rem' }} />;
            } else if (type === Avatar) {
                return <Avatar key={key} className="animate-pulse" size={props?.size ?? 10} />;
            } else {
                const skeletonChildren = React.Children.map(props.children, (child, index) => renderSkeletonElement(child, index));
                return React.cloneElement(node, { key }, skeletonChildren);
            }
        }
        return null;
    };

    const skeletonContent = React.Children.map(children, (child, index) => renderSkeletonElement(child, index));

    return (
        <>
            {loading ? <>{skeletonContent}</> : children}
        </>
    );
};

export default Skeleton;
