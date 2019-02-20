import { connect } from 'react-redux';
import { getPosts } from '../../../actions/app';
import { IAppState } from '../../../reducers';
import { getAppPosts, getAppPostsIsProcessing } from '../../../selectors/app';
import { Dashboard as View } from '../components/Dashboard';

function mapStateToProps(state: IAppState) {
    return {
        allPosts: getAppPosts(state),
        postsIsProcessing: getAppPostsIsProcessing(state),
    }
}

function mapDispatchToProps(dispatch: any) {
    return {
        getPosts: () => dispatch(getPosts()),
    }
}

export const Dashboard = connect(mapStateToProps, mapDispatchToProps)(View);