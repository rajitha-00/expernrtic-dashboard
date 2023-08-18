import React from 'react'
import NestedAccordion from './NestedAccordion';
const Accodion = () => {
  return (
    <>
        <div className="container mx-auto p-4">

            <NestedAccordion title="Folder">
                <NestedAccordion title="Folder">
                    <NestedAccordion title="Folder">    
                    </NestedAccordion>
                    <NestedAccordion title="Folder">
                    </NestedAccordion>
                </NestedAccordion>
                <NestedAccordion title="Folder">
                </NestedAccordion>
            </NestedAccordion>
            <NestedAccordion title="Folder">
                <NestedAccordion title="Folder">
                </NestedAccordion>
                <NestedAccordion title="Folder">
                </NestedAccordion>
                <NestedAccordion title="Folder">
                </NestedAccordion>         
            </NestedAccordion>
            <NestedAccordion title="Folder">
                <NestedAccordion title="Folder">
                </NestedAccordion>
                <NestedAccordion title="Folder">
                </NestedAccordion>
            </NestedAccordion>
            <NestedAccordion title="Folder">
                <NestedAccordion title="Folder">
                </NestedAccordion>
                <NestedAccordion title="Folder">
                </NestedAccordion>
            </NestedAccordion>
        </div>
    </>
  )
}

export default Accodion
