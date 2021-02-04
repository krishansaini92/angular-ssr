/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
/**
 * Subscription returned from EventSubject.
 * Enables subscriber to un-subscribe from source.
 */
class InternalEventSubscription {
    constructor(fn, subscriptions) {
        this.fn = fn;
        this.subscriptions = subscriptions;
    }
    /** Use during disconnectedCallback to stop receiving events */
    unsubscribe() {
        const index = this.subscriptions.indexOf(this);
        if (index !== -1) {
            this.subscriptions.splice(index, 1);
        }
    }
}
/**
 * Basic Subject implementing Observer style pattern.
 * Use to trigger and communicate outgoing async updates.
 *
 * Used as a lightweight alternative to rxjs style subject.
 * RxJS pulls in too much code for our performance standards
 * and would require additional peer dependencies for the
 * host application to take on.
 *
 * @internal
 */
export class EventSubject {
    constructor() {
        this.subscriptions = [];
    }
    /** Subscribe to receive event value updates */
    subscribe(fn) {
        const sub = new InternalEventSubscription(fn, this.subscriptions);
        this.subscriptions.push(sub);
        return sub;
    }
    /** Use to trigger and send an event to all active subscribers */
    emit(value) {
        this.subscriptions.forEach(sub => sub.fn(value));
    }
    /** Cast Subject to Observable subtype to prevent access to `emit` */
    toEventObservable() {
        return this;
    }
}
//# sourceMappingURL=event-subject.js.map