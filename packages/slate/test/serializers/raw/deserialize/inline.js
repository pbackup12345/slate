/** @jsx h */

import h from '../../../helpers/h'

export const input = {
  object: 'value',
  document: {
    object: 'document',
    data: {},
    nodes: [
      {
        object: 'block',
        type: 'paragraph',
        data: {},
        nodes: [
          {
            object: 'text',
            text: '',
            marks: [],
          },
          {
            object: 'inline',
            type: 'link',
            data: {},
            nodes: [
              {
                object: 'text',
                text: 'one',
                marks: [],
              },
            ],
          },
          {
            object: 'text',
            text: '',
            marks: [],
          },
        ],
      },
    ],
  },
}

export const output = (
  <value>
    <document>
      <paragraph>
        <text />
        <link>one</link>
        <text />
      </paragraph>
    </document>
  </value>
)
