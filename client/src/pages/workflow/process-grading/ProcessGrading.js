import React, { useState } from 'react';
import ReactFlow, { Controls, Background } from 'react-flow-renderer';
import { ContentLayout } from '../../../components/UI/ContentLayout/ContentLayout';

const initialElements = [
  {
    id: '1',
    type: 'input',
    data: { label: 'Комиссия по категорированию' },
    position: { x: 250, y: 0 },
  },
  {
    id: '2',
    data: { label: 'Исходные данные для категорирования' },
    position: { x: 250, y: 95 },
  },
  {
    id: '3',
    data: { label: 'Перечень объектов КИИ поддежащих категорированию' },
    position: { x: 250, y: 185 },
  },
  {
    id: '4',
    data: { label: 'Категорирование объектов КИИ' },
    position: { x: 250, y: 300 },
  },
  {
    id: '5',
    data: { label: 'Акт категорирования объекта КИИ' },
    position: { x: 250, y: 400 },
  },
  {
    id: '6',
    data: { label: 'Направление сведений о результатах категорирования в ФСТЭК России' },
    position: { x: 250, y: 500 },
  },
  { id: 'e1-2', source: '1', target: '2', label: '1' },
  { id: 'e2-3', source: '2', target: '3', label: '2' },
  { id: 'e3-4', source: '3', target: '4', label: '3' },
  { id: 'e4-5', source: '4', target: '5', label: '4' },
  { id: 'e5-6', source: '5', target: '6', label: '5' },
];

const onLoad = (reactFlowInstance) => reactFlowInstance.fitView();

const UpdatableEdge = () => {
  const [elements, setElements] = useState(initialElements);

  // gets called after end of edge gets dragged to another source or target
  // const onEdgeUpdate = (oldEdge, newConnection) =>
  //   setElements((els) => updateEdge(oldEdge, newConnection, els));
  // const onConnect = (params) => setElements((els) => addEdge(params, els));

  return (
    <ContentLayout>
      <h1 style={{ marginBottom: "10px", marginTop: "10px" }}>Исходные данные для категорирования</h1>


      <h1 style={{ marginBottom: "10px", marginTop: "10px" }}>Правила категорирования объектов КИИ РФ</h1>
      <p style={{ marginBottom: "10px", marginTop: "10px" }}>Процедуры категорирования детально прописаны в Постановлении Правительства РФ от 08.02.2018 № 127 «Об утверждении Правил категорирования объектов критической информационной инфраструктуры Российской Федерации, а также перечня показателей критериев значимости объектов критической информационной инфраструктуры Российской Федерации и их значений»</p>
      <div style={{ marginBottom: "10px", marginTop: "10px", border: "1px solid black" }}>
        <ReactFlow
          elements={elements}

          style={{ width: "100%", height: "500px" }}
          defaultZoom={1.5} minZoom={1} maxZoom={3}
        >
          <Background
            variant="dots"
            gap={12}
            size={1}
          />
          <Controls onInteractiveChange />
        </ReactFlow>
      </div>
      <h1 style={{ marginTop: "20px" }}>Новый абзац</h1>
    </ContentLayout>
  );
};

export default UpdatableEdge;