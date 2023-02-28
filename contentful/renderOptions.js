import { INLINES } from '@contentful/rich-text-types'

export const renderOptions = {
  renderNode: {
    [INLINES.HYPERLINK]: (node) => {
      return <a href={ node.data.uri } target="_blank" rel='noreferrer'>{ node.content[0].value }</a>
    }
  }
}