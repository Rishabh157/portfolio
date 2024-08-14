"use client";
import { ReactNode } from 'react';
import { LinkPreview } from '../../@/components/ui/link-preview';

interface LinkPreviewer {
    children: ReactNode
    preview: string
    className?: string
}

export function LinkPreviewer({ children = 'Title', preview = 'https://github.com/Rishabh157', className }: LinkPreviewer) {
    return (
        <LinkPreview url={preview} className={className} >
            {children}
        </LinkPreview>
    );
}
