import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Counter } from "."

describe("Componente Counter", () => {
    test("o título deve iniciar com o valor ZERO", () => {
        render(<Counter />)

        const counterTitle = screen.getByText(0)

        expect(counterTitle).toBeInTheDocument()
    })

    test("deve conter a classe 'title' no título", () => {
        render(<Counter />)

        const counterTitle = screen.getByText(0)

        expect(counterTitle).toHaveClass("title")
    })

    test("o título não deve iniciar com as classes 'positive' e 'negative'", () => {
        render(<Counter />)

        const counterTitle = screen.getByText(0)

        expect(counterTitle).not.toHaveClass("positive")
        expect(counterTitle).not.toHaveClass("negative")
    })

    test("deve conter um botão 'INCREMENTAR'", () => {
        render(<Counter />)

        const incrementButton = screen.getByRole("button", {
            name: /incrementar/i
        })

        expect(incrementButton).toBeInTheDocument()
    })

    test("deve conter um botão 'INCREMENTAR' com a classe 'increment'", () => {
        render(<Counter />)

        const incrementButton = screen.getByRole("button", {
            name: /incrementar/i
        })

        expect(incrementButton).toHaveClass("increment");
    })

    test("deve conter um botão 'DECREMENTAR'", () => {
        render(<Counter />)

        const decrementButton = screen.getByRole("button", {
            name: /decrementar/i
        })

        expect(decrementButton).toBeInTheDocument()
    })

    test("deve conter um botão 'DECREMENTAR' com a classe 'decrement'", () => {
        render(<Counter />)

        const decrementButton = screen.getByRole("button", {
            name: /decrementar/i
        })

        expect(decrementButton).toHaveClass("decrement")
    })

    test("deve incrementar +1 ao clicar no botão 'INCREMENTAR'", () => {
        render(<Counter />)

        const incrementButton = screen.getByRole("button", {
            name: /incrementar/i
        })

        expect(screen.queryByText("1")).toBeNull()
        userEvent.click(incrementButton)
        expect(screen.getByText("1"))
    })

    test("deve decrementar -1 ao clicar no botão 'DECREMENTAR'", () => {
        render(<Counter />)

        const decrementButton = screen.getByRole("button", {
            name: /decrementar/i
        })

        expect(screen.queryByText("-1")).toBeNull()
        userEvent.click(decrementButton)
        expect(screen.getByText("-1"))
    })

    test("deve adicionar a classe 'positive' no título, quando o valor for maior do que 0", () => {
        render(<Counter />)

        const incrementButton = screen.getByRole("button", {
            name: /incrementar/i
        })

        expect(screen.queryByText("0")).not.toHaveClass("positive")
        userEvent.click(incrementButton)
        expect(screen.getByText("1")).toHaveClass("positive")
    })

    test("deve adicionar a classe 'negative' no título, quando o valor for menor do que 0", () => {
        render(<Counter />)

        const decrementButton = screen.getByRole("button", {
            name: /decrementar/i
        })

        expect(screen.queryByText("0")).not.toHaveClass("negative")
        userEvent.click(decrementButton)
        expect(screen.getByText("-1")).toHaveClass("negative")
    })
})