
/**
 * The payload of the change event fired right before the tab change
 */
export interface XmTabChangeEvent {
    /**
     * Id of the currently active tab
     */
    activeId: string;

    /**
     * Id of the newly selected tab
     */
    nextId: string;

    /**
     * Title of the newly selected tab
     */
    nextTitle: string;

    /**
     * Function that will prevent tab switch if called
     */
    preventDefault: () => void;
}