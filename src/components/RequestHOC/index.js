import React, { Component } from "react";
import Loading from "../Loading";

const withRequest = (WrappedComponent, entity) => {

    return class extends Component {

        state = {
            data: []
        }

        componentDidMount() {
            const fetchData = async () => {

                const baseURL = "https://jsonplaceholder.typicode.com/"

                const res = await fetch(baseURL + entity)
                const json = await res.json()

                if (json) {
                    this.setState({
                        ...this.state,
                        data: json
                    })
                }
            }
            setTimeout(() => {
                fetchData();
            }, 2000)
        }

        render() {
            let { data } = this.state
            return (
                data.length === 0
                    ? <Loading />
                    : <WrappedComponent data={data} />
            )
        }
    }
}

export default withRequest;