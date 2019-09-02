import React, { Component, ReactNode } from 'react';

export type ViewHolderProps = {
	process?: () => Promise<any>;
	splash?: ReactNode;
	children?: (success: any) => ReactNode;
	error?: (error: any) => ReactNode;
}
export type ViewHolderState = {
	success?: any;
	failure?: any;
}

export class ViewHolder extends Component<ViewHolderProps, ViewHolderState> {
	state: ViewHolderState = {};

	componentDidMount(): void {
		const { process } = this.props;
		process().then(success => this.setState({ success: true }))
			.catch(failure => this.setState({ failure: true }));
	}

	render() {
		const { splash, children, error } = this.props;
		const { success, failure } = this.state;
		if (success) {
			return children ? children(success) : null;
		}
		if (failure) {
			return error ? error(failure) : null;
		}
		return splash ? splash : null;
	}
}
