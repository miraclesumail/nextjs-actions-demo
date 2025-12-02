/*
 * @Author: sumail sumail@xyzzdev.com
 * @Date: 2024-10-08 20:11:08
 * @LastEditors: sumail sumail@xyzzdev.com
 * @LastEditTime: 2025-12-02 10:01:09
 * @FilePath: /travel-dairy_副本/src/app/test3/page.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
'use client';
import { DndContext, DragOverEvent, DragMoveEvent } from '@dnd-kit/core';
import { BasicSetup, HorizontalAxis } from './components/dragStory';
import Draggable from './components/dragable';
import Droppable from './components/droppable';
import Sortable from './components/sortable';
import { useEffect, useState } from 'react';

const Page = () => {
  const [isDropped, setIsDropped] = useState(false);

  const draggableMarkup = <Draggable>Drag me</Draggable>;

  function handleDragOver(event: DragOverEvent) {
    const { active, over } = event;

    if (over?.id == 'droppable') {
      setIsDropped(true);
    } else {
      setIsDropped(false);
    }
    console.log(active, over, 'handleDragOver happen----');
  }

  function handleDragMove(event: DragMoveEvent) {
    const { delta, active } = event;
  }

  function handleDragEnd(event: DragMoveEvent) {
    const { delta, active } = event;
    console.log(delta, active, 'handleDragEnd happen----');
  }

  return (
    <div>
      page
      <Sortable />
      <DndContext onDragOver={handleDragOver} onDragMove={handleDragMove} onDragEnd={handleDragEnd}>
        {!isDropped ? draggableMarkup : null}
        <Droppable>{isDropped ? draggableMarkup : 'Drop here'}</Droppable>
      </DndContext>
      <BasicSetup />
      <HorizontalAxis />
    </div>
  );
};

export default Page;
